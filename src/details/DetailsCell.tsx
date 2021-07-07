import React from "react";
import './Details.css';
import {ContactListItem} from "./details-data";
import {SvgIcon} from "@material-ui/core";
import DetailsCellLabel from './DetailsCellLabel';

const DetailsCell = (props: { title: string, value: string | string[], list?: Array<ContactListItem> }) => {

    const renderValue = (val: string | string[]) => {
        if (typeof val === "string") {
            return <div>{val}</div>
        } else {
            return val.map(item => <div>{item}</div>)
        }
    }

    const renderList = (list: Array<ContactListItem>) => {
        return (
            <div>
                {list.map((listItem: ContactListItem) => {
                    return (
                        <div className={'details-contacts'}>
                            <SvgIcon component={listItem.icon}/>
                            {listItem.url
                                ? <a className={'details-contacts-link'} href={listItem.url}>{listItem.text}</a>
                                : <div className={'details-contacts-text'}>{listItem.text}</div>
                            }
                        </div>)
                })}
            </div>
        )
    }

    return (
        <div className={'details-cell'}>
          <DetailsCellLabel text={props.title} />

            <>
                {renderValue(props.value)}
            </>
            {props.list && renderList(props.list)}
        </div>
    )
}

export default DetailsCell;