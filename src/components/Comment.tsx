import { IComment } from '../utils/types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';

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
                    <Rating name="read-only" value={comment.score} precision={0.1} readOnly />
                </div>
            </div>
            <Typography align="left" margin="5px">
                {comment.comment}
            </Typography>
        </Box>
    );
};

export default Comment;
