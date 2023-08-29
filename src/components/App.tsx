import { useEffect } from 'react';
import Pages from './Pages';

export default function App() {
  useEffect(() => {
    window.alert(
      'Assumed there is only so little locations;\n\nIf there were more, would use virtualization :)'
    );
  }, []);
  return <Pages />;
}
