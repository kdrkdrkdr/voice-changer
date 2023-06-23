import React, { useMemo } from "react"
import { useAppState } from "../../../001_provider/001_AppStateProvider"

export type SpeakerAreaProps = {
}


export const F0FactorArea = (_props: SpeakerAreaProps) => {
    const { serverSetting } = useAppState()

    const selected = useMemo(() => {
        if (serverSetting.serverSetting.modelSlotIndex == undefined) {
            return
        }
        return serverSetting.serverSetting.modelSlots[serverSetting.serverSetting.modelSlotIndex]
    }, [serverSetting.serverSetting.modelSlotIndex, serverSetting.serverSetting.modelSlots])



    const f0FactorArea = useMemo(() => {
        if (!selected) {
            return <></>
        }

        if (selected.voiceChangerType != "MMVCv15") {
            return <></>
        }


        return (
            <div className="character-area-control">
                <div className="character-area-control-title">
                    F0Factor:
                </div>
                <div className="character-area-control-field">
                    <div className="character-area-slider-control">
                        <span className="character-area-slider-control-kind"></span>
                        <span className="character-area-slider-control-slider">
                            <input type="range" min="0.01" max="5.00" step="0.01" value={serverSetting.serverSetting.f0Factor} onChange={(e) => {
                                serverSetting.updateServerSettings({ ...serverSetting.serverSetting, f0Factor: Number(e.target.value) })
                            }}></input>
                        </span>
                        <span className="character-area-slider-control-val">{serverSetting.serverSetting.f0Factor}</span>
                    </div>

                </div>
            </div>
        )
    }, [serverSetting.serverSetting, serverSetting.updateServerSettings, selected])


    return f0FactorArea
}