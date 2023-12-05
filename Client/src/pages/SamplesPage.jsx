import { SampleCard } from "../components/Sample/SampleCard";

function SamplesPage() {
    return (
        <>
            <div className="flex justify-center p-10">
                <div>
                    <h1 className="font-bold text-xl">
                        No Samples yet, please add a new task
                    </h1>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="grid-cols-1">
                    <SampleCard />
                    <SampleCard />
                    <SampleCard />
                    <SampleCard />
                    <SampleCard />
                </div>
            </div>
        </>
    );
}

export default SamplesPage;