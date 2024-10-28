import Container from 'components/core-ui/container/container';

export default function Footer() {
  return (
    <Container>
      <footer className=' md:mt-36 sm:mt-24 mt-12 '>
        <div className='border-t border-[#C5C5C5] border-opacity-40 py-8  text-center text-sm font-primary dark:text-[#E0E0E0]'>
          © 2024 Agora. All Rights Reserved.
        </div>
      </footer>
    </Container>
  );
}
