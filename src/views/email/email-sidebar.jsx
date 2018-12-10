import React from 'react';
import { ListGroup, ListGroupItem  } from 'reactstrap';
import PerfectScrollbar from 'react-perfect-scrollbar'
/* Sidebar */
const EmailSidebar = ({ emails, setSidebarSection, showComposeMail, showLeftPart, show }) => {
    let unreadCount = emails.reduce(
        function (previous, msg) {
            if (msg.read !== true) {
                return previous + 1;
            }
            else {
                return previous;
            }
        }, 0);

    let deletedCount = emails.reduce(
        function (previous, msg) {
            if (msg.tag === "deleted") {
                return previous + 1;
            }
            else {
                return previous;
            }
        }, 0);

    return (
        <div className={"left-part bg-white " + (show === true ? "show-panel" : "")}>
            <a onClick={() => { showLeftPart(); }} className="btn btn-success show-left-part text-white d-block d-md-none"><i className="mdi mdi-menu"></i></a>
            <PerfectScrollbar className="scrollable" >
                <div className="p-3">
                    <a id="compose_mail" onClick={() => { showComposeMail(); }} className="waves-effect waves-light btn btn-danger d-block text-white">Compose</a>
                </div>
                <div className="divider"></div>
                <ListGroup>
                    <ListGroupItem onClick={() => { setSidebarSection('inbox', 'tag'); }}>
                        <a className="list-group-item-action"><i className="mdi mdi-inbox"></i> Inbox <span className="badge badge-success float-right mt-1">{unreadCount}</span></a>
                    </ListGroupItem>
                    <ListGroupItem onClick={() => { setSidebarSection('starred', 'tag'); }}>
                        <a className="list-group-item-action" > <i className="mdi mdi-star"></i> Starred </a>
                    </ListGroupItem>
                    <ListGroupItem onClick={() => { setSidebarSection('important', 'tag'); }}>
                        <a className="list-group-item-action"> <i className="mdi mdi-label"></i> Important </a>
                    </ListGroupItem>
                    <ListGroupItem onClick={() => { setSidebarSection('draft', 'tag'); }}>
                        <a className="list-group-item-action"> <i className="mdi mdi-file"></i> Draft </a>
                    </ListGroupItem>
                    <ListGroupItem onClick={() => { setSidebarSection('sent', 'tag'); }}>
                        <a className="list-group-item-action"> <i className="mdi mdi-send"></i> Sent </a>
                    </ListGroupItem>
                    <ListGroupItem>
                        <hr />
                    </ListGroupItem>
                    <ListGroupItem onClick={() => { setSidebarSection('spam', 'tag'); }}>
                        <a className="list-group-item-action"> <i className="mdi mdi-block-helper"></i> Spam </a>
                    </ListGroupItem>
                    <ListGroupItem onClick={() => { setSidebarSection('deleted', 'tag'); }}>
                        <a className="list-group-item-action"> <i className="mdi mdi-delete"></i> Trash <span className="badge badge-danger float-right mt-1">{deletedCount}</span></a>
                    </ListGroupItem>
                    <ListGroupItem>
                        <hr />
                    </ListGroupItem>
                    <ListGroupItem onClick={() => { setSidebarSection('work', 'label'); }}>
                        <a className="list-group-item-action"><i className="text-danger mdi mdi-checkbox-blank-circle"></i> Work </a>
                    </ListGroupItem>
                    <ListGroupItem onClick={() => { setSidebarSection('business', 'label'); }}>
                        <a className="list-group-item-action"><i className="text-success mdi mdi-checkbox-blank-circle"></i> Business </a>
                    </ListGroupItem>
                    <ListGroupItem onClick={() => { setSidebarSection('family', 'label'); }}>
                        <a className="list-group-item-action"><i className="text-warning mdi mdi-checkbox-blank-circle"></i> Family </a>
                    </ListGroupItem>
                    <ListGroupItem onClick={() => { setSidebarSection('friends', 'label'); }}>
                        <a className="list-group-item-action"><i className="text-info mdi mdi-checkbox-blank-circle"></i> Friends </a>
                    </ListGroupItem>
                </ListGroup>
            </PerfectScrollbar>
        </div>
    );
};

export { EmailSidebar };