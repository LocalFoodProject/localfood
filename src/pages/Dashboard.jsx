import React, { Component } from 'react';
import { Tabs } from 'antd';
import CreateOfferForm from '../components/CreateOfferForm';
const TabPane = Tabs.TabPane;

class Dashboard extends Component {
  render() {
    return (
      <Tabs type="card" className="tc w-100" size="large" tabBarGutter={10}>
        <TabPane tab="Producer" key="1">
          <Producer />
        </TabPane>
        <TabPane tab="Consumer" key="2">
          <Consumer />
        </TabPane>
      </Tabs>
    );
  }
}

export default Dashboard;

const Producer = () => {
  return (
    <article class="pa3 pa5-ns">
      <h1 class="f2">Producer</h1>
      <CreateOfferForm />
    </article>
  );
};

const Consumer = () => {
  return (
    <article class="pa3 pa5-ns">
      <h1 class="f2">Consumer</h1>

      <p class="measure lh-copy center">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </p>
      <p class="measure lh-copy center">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </p>
    </article>
  );
};
