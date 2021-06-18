import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Paragraph from './ParagraphTabs';

const Abouttabs = () => {
  return (
    <Tabs defaultActiveKey="about" id="uncontrolled-tab-example">
      <Tab eventKey="about" title="About me">
        <Paragraph />
      </Tab>
      <Tab eventKey="skills" title="Skills">
        <Paragraph />
      </Tab>
    </Tabs>
  );
};

export default Abouttabs;