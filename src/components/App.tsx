import { useEffect } from 'react';
import Pages from './Pages';

export default function App() {
  useEffect(() => {
    window.alert(
      `Assumed there is only so little locations - if there were more, would use virtualization;
      \nCould not find semibold variant of Lato font, so typography is a bit off`
    );
  }, []);
  return <Pages />;
}
