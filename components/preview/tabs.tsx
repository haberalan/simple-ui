import { TabItem, Tabs } from "../ui";

const TabsPreview = () => {
  return (
    <Tabs labels={["First", "Second", "Third"]} variant="primary">
      <TabItem label="First">
        <></>
      </TabItem>
      <TabItem label="Second">
        <></>
      </TabItem>
      <TabItem label="Third">
        <></>
      </TabItem>
    </Tabs>
  );
};

export default TabsPreview;
