import React from "react";

// export default function AccordionComponent({ data }) {
 
//   return (
//     <ul className="collapsible">
//       {data.map((info,index) => 
//         <li key={index}>
//           <div className="collapsible-header">
//             <i className="material-icons">filter_drama</i>
//             {info.title}
//           </div>
//           <div className="collapsible-body">
//             <span>{info.content}</span>
//           </div>
//         </li>
//       )}
//     </ul>
//   );
// }
export default class AccordionComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: -1
    };
    this.getSelected = this.getSelected.bind(this);
    this.makeActive = this.makeActive.bind(this);
    this.eventHandler = this.eventHandler.bind(this);
  }
  eventHandler(e) {
    var index = parseInt(e.target.name);
    this.makeActive(index);
  }
  makeActive(index) {
    var check = this.state.active === index;
    if (check) {
      this.setState({ active: -1 });
    } else {
      this.setState({ active: index });
    }
  }

  getSelected(index) {
    if (this.state.active === index) {
      return "selected";
    } else {
      return "deselected";
    }
  }

  showList(dataInfo) {
    var List = dataInfo.map((data, index) => {
      return (
        <div className={"Section animated fadeInDown"}>
          <button name={index} className={"Header"} onClick={this.eventHandler}>
            {data.title}
          </button>
          <p className={"Content " + this.getSelected(index)}>
            {data.content.split("\n").map(i => {
              return <div>{i}</div>;
            })}
          </p>
        </div>
      );
    });
    return List;
  }

  render() {
    var list = this.showList(this.props.data);
    return <div className="accorContainer">{list}</div>;
  }
}
