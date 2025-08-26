"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  User,
  MapPin,
  CheckCircle,
  Send,
  Search,
} from "lucide-react";

const PlumbingServiceComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
    privacy: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  const cities = [
    "Dormagen",
    "Düsseldorf",
    "Düsseldorf-Pempelfort",
    "Erkrath",
    "Grevenbroich",
    "Haan",
    "Hilden",
    "Jüchen",
    "Kaarst",
    "Kamphausen",
    "Korschenbroich",
    "Krefeld",
    "Meerbusch",
    "Mettmann",
    "Mönchengladbach",
    "Monheim am Rhein",
    "Neubrück",
    "Pulheim",
    "Ratingen",
    "Rommerskirchen",
    "Sinnersdorf",
    "Tönisvorst",
    "Viersen",
    "Willich",
  ];

  const services = [
    "Rohrreinigung & Kanalreinigung",
    "WC Reparatur / Installation",
    "Rohrbruch & Wasserschaden",
  ];

  return (
    <div className="bg-[#EFEFEF] min-h-screen p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="text-orange-500 text-sm font-medium mb-2 border-b-2 border-orange-500 inline-block pb-1">
            Klempner für Neusser Region
          </div>
          <div className="flex justify-between ">
            <h1 className="text-4xl font-bold text-blue-600 mb-4">
              Einsatzgebiet Neuss
            </h1>
            <div className="flex items-center w-[300px]  overflow-hidden">
              <input
                type="text"
                placeholder="Sanitär Notdienst Suche"
                className="rounded-l-full flex-1 px-4 py-[6px] bg-orange-500 text-white font-semibold placeholder-white focus:outline-none"
              />
              <button className="bg-[#B6B6B6] px-4 py-2 flex items-center justify-center rounded-r-full">
                <Search size={20} className="text-white" />
              </button>
            </div>
          </div>

          {/* Cities List */}
          <div className="text-gray-700 text-sm leading-relaxed">
            {cities.map((city, index) => (
              <span key={city}>
                {city}
                {index < cities.length - 1 && (
                  <span className="mx-1 text-blue-600">•</span>
                )}
              </span>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Contact Info & Services */}
          <div className="space-y-8">
            {/* Contact Section */}
            <div>
              <div className="text-orange-500 text-sm font-medium mb-4 border-b-2 border-orange-500 inline-block pb-1">
                Klempner in Neuss
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Kontaktieren Sie Ihren regionalen Sanitär Notdienst per Anruf
                oder Kontaktformular. Für Neuss sind aktuell folgende Klempner
                rund um die Uhr im Einsatz:
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-700">
                  <User className="w-5 h-5 text-blue-600" />
                  <span className="font-medium">Herr. K. Ahmed</span>
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span>service@notdienst-sanitaer.de</span>
                </div>

                <div className="bg-blue-600 text-white p-4 rounded-full text-center flex gap-4 justify-center items-center">
                  <Phone className="w-6 h-6 inline-block mr-2" />
                  <div>
                    <div className="text-2xl font-bold">0176 - 15 706 043</div>
                    <div className="text-sm">Rund um die Uhr erreichbar</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Section */}
            <div>
              <div className="text-orange-500 text-sm font-medium mb-4 border-b-2 border-orange-500 inline-block pb-1">
                Leistungen
              </div>
              <p className="text-gray-700 mb-4">
                Folgende Spezifikationen deckt der örtliche Klempner in Ihrer
                Region ab:
              </p>

              <div className="space-y-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Middle Column - Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name (erforderlich)"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Betreff"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email (erforderlich)"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Nachricht"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                ></textarea>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="privacy"
                  id="privacy"
                  checked={formData.privacy}
                  onChange={handleInputChange}
                  className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  required
                />
                <label
                  htmlFor="privacy"
                  className="text-sm text-gray-700 leading-relaxed"
                >
                  Ich habe die Datenschutzerklärung zur Kenntnis genommen. Ich
                  stimme zu, dass meine Angaben und Daten zur Beantwortung
                  meiner Anfrage elektronisch erhoben und gespeichert werden.
                </label>
              </div>

              {/* reCAPTCHA placeholder */}
              <div className="bg-gray-100 p-4 border border-gray-300 rounded flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="w-6 h-6" />
                  <span className="text-sm text-gray-700">
                    I am not a robot
                  </span>
                </div>
                <div className="text-xs text-gray-500">
                  <div>reCAPTCHA</div>
                  <div>Privacy - Terms</div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-full transition duration-200 flex items-center justify-center gap-2"
              >
                <span>
                  <Send size={18} />
                </span>
                Senden
              </button>
            </form>
          </div>

          {/* Right Column - Map */}
          <div className="bg-gray-800 rounded-lg p-6 text-white">
            <div className="text-center mb-4">
              <p className="text-sm mb-2">
                Mit dem Laden der Karte akzeptieren Sie die
              </p>
              <p className="text-sm mb-2">Datenschutzerklärung von Google.</p>
              <button className="text-green-400 text-sm underline hover:text-green-300">
                Mehr erfahren
              </button>
            </div>

            <div className="text-center mb-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded transition duration-200">
                Karte laden
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm">
              <input type="checkbox" className="w-4 h-4" defaultChecked />
              <span>Google Maps immer entsperren</span>
            </div>

            {/* Map placeholder */}
            <div className="mt-6 bg-gray-700 h-64 rounded overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999658168279!2d2.2922926156744853!3d48.85837307928715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fdeb51b9a6f%3A0x39c0e45a86e9f9e4!2sEiffelturm!5e0!3m2!1sde!2sde!4v1677767890123!5m2!1sde!2sde"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlumbingServiceComponent;
