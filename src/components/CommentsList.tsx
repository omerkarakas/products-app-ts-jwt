import { IComment } from '../utils/types';
import Comment from './Comment';

type Props = {
    comments: IComment[];
};

const CommentsList = ({ comments }: Props) => {
    return (
        <div>
            {comments.map((comment, index) => {
                return <Comment key={index} comment={comment} />;
            })}
        </div>
    );
};

export default CommentsList;
