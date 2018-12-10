import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';

import * as data from './data.jsx';

class Messages extends React.Component {
  render() {
    return (
      /*--------------------------------------------------------------------------------*/
      /* Used In Dashboard-4 && Widget Page                                             */
      /*--------------------------------------------------------------------------------*/
      <Card>
        <CardBody>
          <CardTitle>Recent Messages</CardTitle>
          <div className="mailbox">
            <div className="message-center message-body">
              {/*<!-- Message -->*/}
              {data.messages.map((message, index) => {
                return (
                  <a href="" className="message-item" key={index}>
                    <span className="user-img">
                      <img
                        src={message.image}
                        alt="user"
                        className="rounded-circle"
                        width=""
                      />
                      <span
                        className={
                          'profile-status pull-right ' + message.status
                        }
                      />
                    </span>
                    <div className="mail-contnet">
                      <h5 className="message-title">{message.title}</h5>
                      <span className="mail-desc">{message.desc}</span>
                      <span className="time">{message.time}</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </CardBody>
      </Card>
    );
  }
}

export default Messages;
