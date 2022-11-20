import React, { useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { IComment, IProduct } from '../utils/types';

const labels: { [index: string]: string } = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};

function getLabelText(value: number) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

type Props = {
    product: IProduct;
    addComment: (product: IProduct, comment: IComment) => void;
};

const AddComment = ({ product, addComment }: Props) => {
    const [formOpen, setFormOpen] = useState(false);

    const [comment, setComment] = useState('');

    const [value, setValue] = React.useState<number | null>(2);
    const [hover, setHover] = React.useState(-1);

    const saveComment = () => {
        let userEmail = localStorage.getItem('username');

        let commentObject = {
            username: userEmail?.substring(0, userEmail.indexOf('@')),
            comment,
            score: value,
        } as IComment;
        addComment(product, commentObject);
    };

    if (!formOpen) {
        return (
            <button type="submit" className="buttons" onClick={() => setFormOpen(true)}>
                Add Comment
            </button>
        );
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }}
        >
            <form onSubmit={() => {}}>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <div
                        style={{
                            width: 200,
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                    >
                        <Rating
                            name="hover-feedback"
                            value={value}
                            precision={0.5}
                            getLabelText={getLabelText}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                            onChangeActive={(event, newHover) => {
                                setHover(newHover);
                            }}
                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                        />
                        {value !== null && <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>}
                    </div>
                    <TextField
                        id="comment-textarea"
                        label="Your Comment"
                        placeholder="Please evaluate this product"
                        multiline
                        rows={4}
                        style={{ width: '100%' }}
                        value={comment}
                        onChange={(e) => {
                            setComment(e.target.value);
                        }}
                    />
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'start',
                        }}
                    >
                        <button
                            type="submit"
                            className="buttons"
                            onClick={(e) => {
                                e.preventDefault();
                                saveComment();
                                setFormOpen(false);
                            }}
                        >
                            Save Comment
                        </button>
                        <button
                            type="submit"
                            className="buttons"
                            onClick={(e) => {
                                e.preventDefault();
                                setFormOpen(false);
                            }}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddComment;
