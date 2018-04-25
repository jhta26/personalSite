import { configure } from "@storybook/react";
function loadStories() {
  require('../src/index.css');
  require('../src/components/stories/HeaderComponent.story');
  require('../src/components/stories/HomePageBodyComponent.story');
  require('../src/components/stories/HomePageLayout.story');
  require('../src/components/stories/HomePage.story');
  require('../src/components/stories/ProjectComponent.story');
  require('../src/components/stories/AccordionComponent.story')
}
configure(loadStories, module);
