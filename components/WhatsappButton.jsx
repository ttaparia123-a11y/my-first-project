import Link from 'next/link';

export default function WhatsAppButton() {
  return (
    <>
      <Link
        href="https://wa.me/919351835358"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '25px',
          zIndex: 9999,
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          boxShadow: '2px 2px 10px rgba(0,0,0,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'transform 0.3s ease',
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          width={60}
          height={60}
          style={{ borderRadius: '50%' }}
        />
      </Link>
    </>
  );
}