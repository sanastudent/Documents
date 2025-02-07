"use client";

import { useForm, FormProvider } from "react-hook-form"  // Import FormProvider from react-hook-form
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"


 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { client } from "@/sanity/lib/client";



const formSchema = z.object({
  firstName:z.string().min(1).max(50),
  email: z.string().email(),
  subject: z.string().min(1, "Subject is required"), 
  message: z.string().min(1, "Message is required") // Add message field
})

type FormType = z.infer<typeof formSchema>


const ContactForm = () => {

    const form = useForm<FormType>({
        resolver: zodResolver(formSchema)
    })

        async function onSubmit(values: FormType) {
         await client.create({
            _type:"contactForm",
            name:values.firstName,
            email:values.email,
            subject:values.subject,
            message:values.message

          })  


          }
              
  
  return (

<div className="w-full max-w-md mx-auto md:mx-0">
<FormProvider {...form}>
  <form className="space-y-6">
    {/* Name and Email Input Fields */}
    <div className="flex  gap-4">
      <FormField
        name="firstName"
        render={({ field }) => (
          <FormItem>
            <FormLabel></FormLabel>
            <FormControl>
              <Input
                placeholder="Your Name"
                {...field}
                className="w-full py-4 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FB2E86]"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel></FormLabel>
            <FormControl>
              <Input
                type="email"
                placeholder="Your Email"
                {...field}
                className="w-full py-4 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FB2E86]"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>

    {/* Subject Input Field */}
    <FormField
      name="subject"
      render={({ field }) => (
        <FormItem>
          <FormLabel></FormLabel>
          <FormControl>
            <Input
              type="text"
              placeholder="Subject"
              {...field}
              className="w-full py-4 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FB2E86]"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />

    {/* Message Textarea */}
    <FormField
      name="message"
      render={({ field }) => (
        <FormItem>
          <FormLabel></FormLabel>
          <FormControl>
            <textarea
              placeholder="Your Message"
              {...field}
              className="w-full p-3 h-32 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FB2E86]"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />

    {/* Submit Button */}
    <Button
      type="submit"
      className="w-full sm:w-[157px] h-[44px] py-3 bg-[#FB2E86] text-white text-sm rounded-md hover:bg-[#DB1D6E] mx-auto md:mx-0"
    >
      Send Email
    </Button>
  </form>
</FormProvider>
</div>
  )
}

export default ContactForm
