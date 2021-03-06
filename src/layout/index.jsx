import Header from './Header';
import Footer from './Footer';
import Content from './Content';

const Layout= ({children}) => {
  return (
      <>
      <Header/>
    <Content>
        {children}
    </Content>
      <Footer/>
      </>
  )
};

export default Layout;
