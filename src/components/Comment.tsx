import { IComment } from '../utils/types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ReactStars from 'react-rating-stars-component';

type Props = {
    comment: IComment;
};
const Comment = ({ comment }: Props) => {
    return (
        <Box
            component="div"
            sx={{
                p: 2,
                border: '1px dashed grey',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'start',
                    alignItems: 'center',
                    margin: '4px',
                }}
            >
                <Typography component="span" fontWeight={'bold'} style={{ margin: '2px' }}>
                    {comment.username}
                </Typography>{' '}
                <div style={{ margin: '5px' }}>
                    <ReactStars
                        count={5}
                        value={comment.score}
                        size={24}
                        activeColor="#ffd700"
                        isHalf={true}
                        edit={false}
                    />
                </div>
            </div>
            <Typography align="left" margin="5px">
                {comment.comment}
            </Typography>
        </Box>
    );
};

export default Comment;
