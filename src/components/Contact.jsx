import contactData from "../data/contactData"

const Contact = () => {
  return (
    <section
      className="max-w-[1040px] m-auto md:pl-20 p-4 py-16"
      id="contact">
      <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e]">Contact</h1>

      <form
        action={contactData.formLink}
        method="POST"
        encType="multipart/form-data">
        <fieldset className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">
              Name
            </label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="name"
              required />
          </div>

          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">
              Phone
            </label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="tel"
              name="phone"
              pattern="(\+?\d{1,3})?(\d+-?)+\d+"
              required />
          </div>
        </fieldset>

        <fieldset className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">
            Email
          </label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="email"
            name="email"
            required />
        </fieldset>

        <fieldset className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">
            Subject
          </label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="text"
            name="subject"
            required />
        </fieldset>

        <fieldset className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">
            Message
          </label>
          <textarea
            className="border-2 rounded-lg p-3 border-gray-300"
            rows={10}
            name="message"
            required></textarea>
        </fieldset>

        <button className="bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg cursor-pointer">
          Send Message
        </button>
      </form>
    </section>
  )
}

export default Contact
