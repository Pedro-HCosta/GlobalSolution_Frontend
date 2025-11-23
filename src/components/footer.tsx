export default function Footer() {
  return (
    <footer className="w-full text-black dark:text-white py-6 mt-10 flex justify-center">
      <p className="text-sm">MindCare © {new Date().getFullYear()}</p>
    </footer>
  )
}
