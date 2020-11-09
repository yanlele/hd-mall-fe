import { demoMapDispatch, demoMapState } from '@src/pages/demo/connectData';

type StateProps = ReturnType<typeof demoMapState>
type DispatchProps = ReturnType<typeof demoMapDispatch>

export interface DemoProps extends Partial<StateProps & DispatchProps>{

}
