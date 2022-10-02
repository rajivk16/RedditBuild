const style = {
  profilePic: 'h-4 w-4 rounded-full',
  wrapper: 'flex items-center space-x-1 text-xs text-[#818384]',
  profilePicContainer: 'flex items-center space-x-1',
  tag: 'cursor-pointer text-xs font-semibold text-[#d7dadc] hover:underline',
  postedBy: 'flex items-center space-x-1'
}

const Info = ({author}) => {
  return (
    <div className = {style.wrapper}>
      <div className = {style.profilePicContainer}>
      <img
        className = {style.profilePic}
        src='https://picsum.photos/200/300'
        />
      </div>
      <div className={style.tag}>r/rajivkulkarni</div>

      <span>·</span>

      <div className={style.postedBy}>
      <span>Posted by {author}</span>
      <span>·</span>
      <span>March 16</span>
      </div>
    </div>
  )
}

export default Info