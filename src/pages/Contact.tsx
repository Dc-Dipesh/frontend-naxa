import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const MAX_FILE_SIZE = 5000000
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
]

const CareerSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  phone: z
    .string()
    .min(10, {
      message: "Please enter a valid phone number",
    })
    .max(10, {
      message: "Phone number should be 10 digits",
    }),
  address: z.string().optional(),

  profile_image: z
    .any()
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    )
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max image size is 5MB.`
    ),
  cv: z
    .any()
    .refine(
      (files) => files?.[0]?.type === "application/pdf",
      "Only .pdf format is supported."
    )
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max file size is 5MB.`
    ),

  message: z.string().optional(),
})
const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof CareerSchema>>({
    resolver: zodResolver(CareerSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      profile_image: null,
      cv: null,
      message: "",
    },
  })
  const onSubmit = (data: z.infer<typeof CareerSchema>) => {
    console.log(data)
  }
  return (
    <>
      <div className="w-full flex flex-col  gap-5 h-20 justify-center items-center min-h-[500px] bg-slate-100">
        <span className="uppercase text-custom-100 font-semibold md:text-lg text-sm ">
          Career
        </span>
        <h1 className="text-4xl lg:text-6xl max-w-3xl text-center ">
          Drop Your Resume
        </h1>
        <img
          src="/images/bg-line.svg"
          alt=""
          className="absolute left-0 top-0 z-0 "
        />
      </div>
      <div className="-mt-14">
        <section className="bg-gray-100">
          <div className="mx-auto max-w-screen-xl px-4  sm:px-6 lg:px-8">
            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label htmlFor="name">Full name</label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm border"
                    placeholder="Name"
                    {...register("name")}
                    id="name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm border"
                      placeholder="Email address"
                      {...register("email")}
                      id="email"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone">Phone</label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm border"
                      placeholder="Phone Number"
                      {...register("phone")}
                      id="phone"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="address">Address</label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm border"
                      placeholder="Address"
                      {...register("address")}
                      id="address"
                    />
                    {errors.address && (
                      <p className="text-red-500 text-sm">
                        {errors.address.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="profile_image">Upload your picture</label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm border"
                      type="file"
                      {...register("profile_image")}
                      id="profile_image"
                    />
                    {errors.profile_image && (
                      <p className="text-red-500 text-sm">
                        {errors?.profile_image?.message?.toString()}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="cv">Upload your cv</label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm border"
                    type="file"
                    {...register("cv")}
                    id="cv"
                  />
                  {errors.cv && (
                    <p className="text-red-500 text-sm">
                      {errors?.cv?.message?.toString()}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="message">Message</label>

                  <textarea
                    className="w-full rounded-lg border-gray-200 p-3 text-sm border"
                    placeholder="Message"
                    {...register("message")}
                    rows={8}
                    id="message"
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    Send cv
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Contact
