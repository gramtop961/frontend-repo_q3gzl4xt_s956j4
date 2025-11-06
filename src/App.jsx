import Hero from './components/Hero';
import Header from './components/Header';
import PersonalStatement from './components/PersonalStatement';
import Skills from './components/Skills';
import Experience from './components/Experience';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Dynamic 3D hero cover */}
      <Hero />

      {/* Contact header overlays on 3D background */}
      <Header />

      <main>
        <div className="mx-auto max-w-6xl px-6">
          <div className="-mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="sm:col-span-2">
              <PersonalStatement />
            </div>
            <aside className="sm:col-span-1">
              <Skills />
            </aside>
          </div>
        </div>
        <Experience />
        <footer className="mt-12 border-t border-gray-200 py-8 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Awhina Tipene — Pharmacist</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
