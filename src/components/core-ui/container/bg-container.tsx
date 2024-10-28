interface Props {
  children: React.ReactNode;
}

function BgContainer({ children }: Props) {
  return <div className='dark:bg-bg-dark bg-cover bg-center min-h-screen'>{children}</div>;
}

export default BgContainer;
