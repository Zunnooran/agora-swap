interface Props {
  children: React.ReactNode;
}

function Container({ children }: Props) {
  return <div className='mx-auto max-w-screen-3xl lg:px-20 md:14px px-5 overflow-hidden'>{children}</div>;
}

export default Container;
