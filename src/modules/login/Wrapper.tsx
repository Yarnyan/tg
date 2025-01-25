import { useAppSelector } from "../../hooks/redux"
import Login from "./components/Login"
import Code from "./components/Code"
type Props = {}

export default function Wrapper({ }: Props) {
    const step = useAppSelector((state) => state.login.currentStep)
    const renderComponents = (step: number) => {
        switch (step) {
            case 1:
                return <Login />
            case 2:
                return <Code />
        }
    }
    return (
        <div>
            {renderComponents(step)}
        </div>
    )
}