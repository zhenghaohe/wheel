import React, { ReactElement } from "react";
import "./dialog.scss";
import { Icon } from "../index";
import { scopedClassMake } from "../classes";

interface Props {
  visible: boolean;
  buttons: Array<ReactElement>;
  onClose: Function;
  closeOnClickMask?: boolean;
}

const scopedClass = scopedClassMake("chakras-dialog");

const Dialog: React.FunctionComponent<Props> = props => {
  const onClickClose: React.MouseEventHandler = e => {
    props.onClose();
  };

  const onClickCloseMask: React.MouseEventHandler = e => {
    if (props.closeOnClickMask) {
      props.onClose();
    }
  };

  return props.visible ? (
    <>
      <div className={scopedClass("mask")} onClick={onClickCloseMask}></div>
      <div className={scopedClass()}>
        <div className={scopedClass("close")} onClick={onClickClose}>
          <Icon name="close" />
        </div>
        <header className={scopedClass("header")}>Dialog</header>
        <main className={scopedClass("main")}>{props.children}</main>
        <footer className={scopedClass("footer")}>
          {props.buttons.map((button, index) =>
            React.cloneElement(button, { key: index })
          )}
        </footer>
      </div>
    </>
  ) : null;
};

Dialog.defaultProps = {
  closeOnClickMask: false
};

export default Dialog;
