import React from "react";
import { FcLike,FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) => {
    let course = props.course
    let likedcourses = props.likedcourses;
    let setLikedcourses = props.setLikedcourses;
    function clickHandler(){
        if(likedcourses.includes(course.id)){
            // already liked
            setLikedcourses((prev)=> prev.filter( (cid)=>(cid !== course.id) ) );
            toast.warning("Liked Removed");
        }
        else{
            // already not liked 
            // insert course in liked courses
            if(likedcourses.length === 0){
                setLikedcourses([course.id]);
            }
            else{
                // non-empty 
                setLikedcourses( (prev)=> [...prev, course.id]);
            }
            toast.success("Liked Successfully");
        }
    }
    return (
        <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
            <div className="relative">
                <img src={course.image.url} alt=""></img>
                <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-11px]
               grid place-items-center ">
                    <button onClick={clickHandler}>
                        {
                            likedcourses.includes(course.id)?
                            (<FcLike fontSize="1.75rem"/>):
                            (<FcLikePlaceholder fontSize="1.75rem"/>)
                        }
                    </button>
                </div>
            </div>
            <div className="p-4">
                <p className="text-white  font-semibold text-lg leading-6">{course.title}</p>
                <p className="text-white mt-2">
                    {
                        course.description.length>100 ?
                        (course.description.substr(0,100))+"..." :(course.description)
                    }
                </p>
            </div>
        </div>
    )
}

export default Card;