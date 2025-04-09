import Header from "./components/Header";
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div>
        <Header />
      </div>
      <main className="p-4">{/* Conteúdo principal */}</main>
    </div>
  );
}
