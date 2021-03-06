import { configure } from "@storybook/react";
function loadStories() {
  require('../src/index.css');
  require('../src/components/stories/HeaderComponent.story');
  require('../src/components/stories/HomePageBodyComponent.story');
  require('../src/components/stories/HomePageLayout.story');
  require('../src/components/stories/HomePage.story');
  require('../src/components/stories/ProjectComponent.story');
  require('../src/components/stories/AccordionComponent.story')
  require('../src/components/stories/ProjectPage.story')
  require('../src/components/stories/ResumePage.story')
  require('../src/components/stories/AboutMeBodyComponent.story')
  require('../src/components/stories/ResumeProjectComponent.story')
  require('../src/components/stories/ResumeTechnologiesComponent.story')
  require('../src/components/stories/ResumeEducationComponent.story')
  require('../src/components/stories/ResumeCardComponent.story')
}
configure(loadStories, module);
