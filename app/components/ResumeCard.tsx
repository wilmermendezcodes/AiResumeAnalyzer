import { Link } from "react-router";
import ScoreCircle from "./ScoreCircle";

const ResumeCard = ({
    resume: { id, companyName, jobTitle, feedback},
}: {
    resume: Resume;
}) => {
    return (
        <Link
            to={`/resume/${id}`}
            className="resume-card animate-in fade-in duration-1000"
        >
            <div className="resume-card-header">
                <div className="flex flex-col gap-2">
                    <h2 className=" !text-black font-bold break-words">
                        {companyName || "Company Name Not Specified"}
                    </h2>
                    <h3 className="text-lg break-words text-gray-500">
                        {jobTitle || "Job Title Not Specified"}
                    </h3>
                </div>
                <div className="flex-shrink-0">
                    <ScoreCircle score={feedback.overallScore} />
                </div>
            </div>

        </Link>
    );
};

export default ResumeCard;
