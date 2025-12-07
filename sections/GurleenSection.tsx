import { Calendar, Clock, MapPin, UtensilsCrossed } from 'lucide-react';

export default function GurleenSection() {
  return (
    <section
      id="gurleen"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900"
    >
      <div className="max-w-4xl mx-auto w-full">
        <div className="bg-slate-800/50 rounded-2xl shadow-xl border border-slate-700/50 p-8 sm:p-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-slate-100 mb-8 sm:mb-12">
            Gurleen's 11th Birthday
          </h2>
          
          <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-12">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-400 flex items-center justify-center text-white shadow-lg shadow-cyan-500/30">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-slate-100 mb-2">
                  Date
                </h3>
                <p className="text-base sm:text-lg text-slate-300">
                  April 3rd, 2026
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-400 flex items-center justify-center text-white shadow-lg shadow-cyan-500/30">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-slate-100 mb-2">
                  Time
                </h3>
                <p className="text-base sm:text-lg text-slate-300">
                  Noon to 3:00 PM
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-400 flex items-center justify-center text-white shadow-lg shadow-cyan-500/30">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-slate-100 mb-2">
                  Location
                </h3>
                <p className="text-base sm:text-lg text-slate-300">
                  Climbing Center
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-400 flex items-center justify-center text-white shadow-lg shadow-cyan-500/30">
                <UtensilsCrossed className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-slate-100 mb-2">
                  Food & Fun
                </h3>
                <p className="text-base sm:text-lg text-slate-300">
                  Cake and pizza will be served in the games room at the climbing center.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <a
              href="mailto:dogman@gmail.com?subject=RSVP%20for%20Gurleen's%2011th%20Birthday&body=I%20would%20like%20to%20RSVP%20for%20Gurleen's%2011th%20birthday%20on%20April%203rd,%202026."
              className="px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 bg-cyan-400 text-slate-900 border-2 border-transparent hover:bg-transparent hover:text-cyan-400 hover:border-cyan-400 cursor-pointer"
            >
              RSVP
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
