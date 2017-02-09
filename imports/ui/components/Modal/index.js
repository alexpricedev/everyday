import React from 'react';
import keydown, { Keys } from 'react-keydown';

class Modal extends React.Component {
  componentWillReceiveProps(props) {
    const { keydown, onClose } = props;

    if (keydown.event && keydown.event.which === Keys.esc) {
      onClose();
    }
  }

  render() {
    const {
      onClose,
      children,
    } = this.props;

    return (
      <div>
        <div onClick={onClose} className="overlay"></div>
        <div className="modal">
          { children }

          <a
            href="#"
            title="Close this bitch"
            onClick={e => {
              e.preventDefault();
              onClose();
            }}
          >
            x
          </a>
        </div>

        <style jsx>{`

          .overlay {
            background: #000000;
            bottom: 0;
            left: 0;
            position: fixed;
            right: 0;
            top: 0;
            z-index: 9998;
          }

          .modal {
            background: #ffffff;
            left: 50%;
            margin: 0 0 50px;
            max-height: calc(100vh - 100px);
            max-width: 500px;
            min-width: 300px;
            overflow: scroll;
            padding: 20px;
            position: fixed;
            top: 30px;
            transform: translateX(-50%);
            width: 100%;
            z-index: 9999;
          }

          a {
            background: #000000;
            color: #ffffff;
            height: 24px;
            line-height: 19px;
            padding: 0;
            position: absolute;
            right: 0;
            text-align: center;
            text-decoration: none;
            top: 0;
            width: 26px;
          }
        `}</style>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: React.PropTypes.func.isRequired,
  children: React.PropTypes.node.isRequired,
};

export default keydown('esc')(Modal);
