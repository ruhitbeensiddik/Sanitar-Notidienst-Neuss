// app/components/PlumberEmergency.tsx
"use client";

import { Check, Send } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function PlumberEmergency() {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
    privacy: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData); // Replace with API call
  };

  return (
    <section className="w-full px-6 py-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Content */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">
            Klempner und Sanitär Notdienst in Neuss ist Ihr seriöser Helfer in
            der Not.
          </h2>
          <p className="text-gray-700 mb-4">
            Sollten Sie einmal einen Ernstfall haben, kommt ein mobiler Monteur
            von Klempner und Sanitär Notdienst in Neuss schnell zu Ihnen. Ganz
            gleich, ob Sie einen Wasserhahn, einen Rohrbruch, ein{" "}
            <span className="font-semibold">leckendes Rohr</span> oder eine
            Verstopfung im Abfluss oder in der Toilette erkennen. Sanitär
            Notdienst in Neuss sind rund um die Uhr und an jedem Tag für Sie
            telefonisch erreichbar.
          </p>
          <p className="text-gray-700 mb-6">
            Für all Ihre Fragestellungen haben wir den passenden Installateur,
            der sich{" "}
            <span className="font-semibold">schnell und qualifiziert</span>{" "}
            jedem Problem annimmt.
          </p>

          <h3 className="text-xl font-bold text-blue-700 mb-4">
            Sie haben einen Wasserhahn, der andauernd tropft?
          </h3>
          <p className="text-gray-700 mb-4">
            Zuerst können Sie selbst versuchen den Wasserhahn zu fixen. Hierfür
            können Sie die Dichtung auswechseln, die gerne mit der Zeit spröde
            und somit undicht werden. Blocken Sie zunächst das Wasser an den
            Ventilen ab. Um den Druck aus der Leitung zu empfangen, lassen Sie
            das warme und kalte Wasser laufen. Schrauben Sie im Anschluss die
            Griffe ab. Bei neuen Ablagen lassen sich diese schnell abziehen.
          </p>
          <p className="text-gray-700 mb-4">
            Das Ventil liegt nun frei, sodass Sie es mit einem Maulschlüssel
            lockern und entnehmen können. Auf der Unterseite befindet sich die
            Dichtung, die Sie nun wechseln können. Installieren Sie wieder das
            Ventil und ziehen es fest. Nur noch die Griffe wieder installieren
            und die Wasserwellen öffnen, dann sollte das Tropfen verschwunden
            sein.
          </p>
          <p className="text-gray-700 mb-4">
            Falls dies nichts gebracht hat, können Sie auch versuchen die
            Kartusche auszutauschen.{" "}
            <span className="font-semibold">
              Hierfür gehen Sie wie folgt vor:
            </span>{" "}
            Als Nächstes entfernen Sie den oberen Abdeckungsstopfen. Lösen Sie
            dort die Schraube, sodass Sie den Einhebelgriff entfernen können,
            jetzt können Sie die Kartuschen Abdeckung entfernen. Mit einer Zange
            können Sie die Kartuschenaufnahmeschraube lösen und eine neue
            einsetzen.
          </p>
          <p className="text-gray-700 mb-6">
            Haben all diese Hinweise nichts gebracht, scheuen Sie sich nicht
            unseren Klempner und Sanitär Notdienst Neuss anzurufen. Wir sind{" "}
            <span className="font-semibold">24 Stunden, 7 Tage die Woche</span>{" "}
            für Sie telefonisch erreichbar.
          </p>
        </div>

        {/* Right Sidebar */}
        <div className="bg-gray-100 p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-bold text-blue-800 mb-4">
            Haben Sie Fragen zu folgenden Leistungen im Notdienst Sanitär
            Bereich?
          </h3>
          <p className="text-gray-700 mb-4">
            Der freundliche Notdienst Sanitär Beratungsservice beantwortet gern
            Ihre Fragen zu folgenden Klempner Leistungen:
          </p>

          <ul className="space-y-2 text-gray-800 mb-6">
            <li className="flex gap-2 items-center ">
              <Check size={16} className="text-blue-600 font-bold" />{" "}
              Rohrreinigung
            </li>
            <li className="flex gap-2 items-center ">
              <Check size={16} className="text-blue-600 font-bold" /> Rohrbruch
              Reparatur
            </li>
            <li className="flex gap-2 items-center ">
              <Check size={16} className="text-blue-600 font-bold" />{" "}
              Wasserschaden Sanierung
            </li>
            <li className="flex gap-2 items-center ">
              <Check size={16} className="text-blue-600 font-bold" /> Sanitär
              Notdienst
            </li>
            <li className="flex gap-2 items-center ">
              <Check size={16} className="text-blue-600 font-bold" />{" "}
              Heizungswartung
            </li>
            <li className="flex gap-2 items-center ">
              <Check size={16} className="text-blue-600 font-bold" /> Kanal
              Video-TV
            </li>
            <li className="flex gap-2 items-center ">
              <Check size={16} className="text-blue-600 font-bold" />{" "}
              Leckageortung
            </li>
          </ul>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name (erforderlich)"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg bg-white"
            />
            <input
              type="text"
              name="subject"
              placeholder="Betreff"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg bg-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Email (erforderlich)"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg bg-white"
            />
            <textarea
              name="message"
              placeholder="Nachricht"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full p-2 border rounded-lg bg-white"
            />
            <div className="flex items-start space-x-2 ">
              <input
                type="checkbox"
                name="privacy"
                checked={formData.privacy}
                onChange={handleChange}
                className="w-4 h-4"
              />
              <label className="text-sm text-gray-600">
                Ich habe die{" "}
                <span className="font-bold">
                  <Link href="/">Datenschutzerklärung</Link>
                </span>{" "}
                zur Kenntnis genommen. Ich stimme zu, dass meine Angaben und
                Daten zur Beantwortung meiner Anfrage elektronisch erhoben und
                gespeichert werden.
              </label>
            </div>
            <button
              type="submit"
              className="w-1/2 flex justify-center items-center gap-2 my-2 cursor-pointer bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
            >
              <Send />
              Senden
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
