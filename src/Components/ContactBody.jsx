import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Clock,
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const services = [
  "Air Cargo Operations",
  "Passenger Charter Services",
  "Humanitarian & Relief Flights",
  "Aircraft Leasing & Management",
  "Aviation Consultancy",
  "Flight Operations Support",
  "Logistics Coordination",
  "Special Mission Operations",
];

const ContactBody = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      await emailjs.sendForm(
        "service_2ltfgon",
        "template_wjjph2k",
        formRef.current,
        {
          publicKey: "Q6vJ49DIR-yPwOvu9",
        }
      );

      setStatus({
        type: "success",
        message:
          "Your message has been sent successfully. OMNIX Aviation will contact you soon.",
      });

      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);

      setStatus({
        type: "error",
        message:
          "Something went wrong. Please try again or contact us directly by email.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-background py-20 text-foreground sm:py-24 lg:py-28">
      <div className="absolute inset-0 bg-omnix-grid opacity-20 dark:opacity-10" />
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-accent/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.42fr_0.58fr]">
          {/* Left Info */}
          <div className="rounded-2xl bg-primary p-6 text-primary-foreground shadow-2xl shadow-primary/15 sm:p-8">
            <p className="text-sm font-semibold text-accent">Contact Information</p>

            <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight text-white">
              Speak With OMNIX Aviation Team
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/70">
              Share your aviation requirement and our team will help you plan
              the right solution for cargo, charter, humanitarian, logistics, or
              special mission support.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-accent">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">Phone</p>
                  <p className="mt-1 text-sm text-white/65">+252611276128 / +252611276129</p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-accent">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">Email</p>
                  <p className="mt-1 text-sm text-white/65">
                    info@omnixaviation.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-accent">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">Location</p>
                  <p className="mt-1 text-sm text-white/65">
                    Mogadishu, Somalia
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-accent">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">Support</p>
                  <p className="mt-1 text-sm text-white/65">
                    Available for mission-based aviation support
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-accent hover:text-primary"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Right Form */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-2xl shadow-foreground/5 sm:p-8">
            <p className="text-sm font-semibold text-primary dark:text-accent">
              Request Aviation Support
            </p>

            <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight text-card-foreground">
              Send Your Mission Details
            </h2>

            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Complete the form below and OMNIX Aviation will receive your
              request by email.
            </p>

            <form ref={formRef} onSubmit={sendEmail} className="mt-8 grid gap-5">
              <input
                type="hidden"
                name="to_email"
                value="info@omnixaviation.com"
              />

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold text-card-foreground">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    required
                    placeholder="Your full name"
                    className="mt-2 h-12 w-full rounded-xl border border-border bg-muted px-4 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/70 focus:border-primary focus:bg-background dark:bg-background/40"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-card-foreground">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="from_email"
                    required
                    placeholder="you@example.com"
                    className="mt-2 h-12 w-full rounded-xl border border-border bg-muted px-4 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/70 focus:border-primary focus:bg-background dark:bg-background/40"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold text-card-foreground">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+252..."
                    className="mt-2 h-12 w-full rounded-xl border border-border bg-muted px-4 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/70 focus:border-primary focus:bg-background dark:bg-background/40"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-card-foreground">
                    Service Needed
                  </label>
                  <select
                    name="service"
                    required
                    defaultValue=""
                    className="mt-2 h-12 w-full rounded-xl border border-border bg-muted px-4 text-sm text-foreground outline-none transition focus:border-primary focus:bg-background dark:bg-background/40 dark:text-foreground dark:[color-scheme:dark]"
                  >
                    <option
                      value=""
                      disabled
                      className="bg-background text-foreground dark:bg-card dark:text-foreground"
                    >
                      Select Service
                    </option>

                    {services.map((service) => (
                      <option
                        key={service}
                        value={service}
                        className="bg-background text-foreground dark:bg-card dark:text-foreground"
                      >
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-card-foreground">
                  Message / Mission Details
                </label>
                <textarea
                  name="message"
                  required
                  rows="6"
                  placeholder="Tell us about your aviation requirement, cargo, passengers, destination, timing, or mission details..."
                  className="mt-2 w-full resize-none rounded-xl border border-border bg-muted px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/70 focus:border-primary focus:bg-background dark:bg-background/40"
                />
              </div>

              {status.message && (
                <div
                  className={`flex gap-3 rounded-xl border p-4 text-sm leading-6 ${
                    status.type === "success"
                      ? "border-green-500/20 bg-green-500/10 text-green-700 dark:text-green-400"
                      : "border-red-500/20 bg-red-500/10 text-red-700 dark:text-red-400"
                  }`}
                >
                  {status.type === "success" ? (
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                  ) : (
                    <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
                  )}
                  <span>{status.message}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground transition hover:bg-aviation-blue disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Send Request"}
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-foreground/5">
          <iframe
            title="OMNIX Aviation Location"
            src="https://www.google.com/maps?q=Mogadishu%20Somalia&output=embed"
            className="h-[360px] w-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactBody;