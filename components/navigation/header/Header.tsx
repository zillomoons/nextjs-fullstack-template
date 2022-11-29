import Link from 'next/link';
import AuthButton from '../../buttons/auth-button/AuthButton';

export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}

const Header: React.FC<IHeader> = ({ className, ...headerProps }) => {
  return (
    <header
      {...headerProps}
      className={`w-full flex flex-row items-center justify-between ${className}`}
    >
      <div className="space-x-5 m-5">
        <Link href="/" passHref legacyBehavior>
          <a className="link-primary">About</a>
        </Link>
        <Link href="/" passHref legacyBehavior>
          <a className="link-primary">Store</a>
        </Link>
      </div>
      <div className="space-x-5 m-5">
        <Link href="/" passHref legacyBehavior>
          <a className="hover:underline hidden sm:inline">Gmail</a>
        </Link>
        <Link href="/" passHref legacyBehavior>
          <a className="hover:underline hidden sm:inline">Images</a>
        </Link>
        <AuthButton />
      </div>
    </header>
  );
};

export default Header;
