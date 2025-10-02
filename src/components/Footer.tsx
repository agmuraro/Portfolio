function Footer() {
  return (
    <footer className='w-full flex justify-center mb-10'>
      <div className='max-w-3xl px-6 py-4 bg-surface rounded-xl border border-border shadow-lg text-center'>
        <span className='text-gray-300 text-sm tracking-tight'>
          Arthur Muraro <span className='text-accent'>&copy;</span>{' '}
          {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}

export default Footer;
