import {createContext, useState} from "react"
import fulldata from "../Data/fulldata"


export const DashboardContext = createContext()

export const DashboardContextProvider = ({ children }) => {

    const [dataChart, setDataChart] = useState(fulldata["2022"])
    const [yearData, setYearData]= useState("2022")

    const changeYear = el => {
        setDataChart(fulldata[el.target.value])
        setYearData(el.target.value)
    }

    return (
        <DashboardContext.Provider value={{changeYear, dataChart, yearData }}>
            {children}
        </DashboardContext.Provider>
    )
}

export default DashboardContextProvider;