import { ISession } from "../events"; 
import { VoterService} from ".";
import { Observable, of } from "rxjs";

describe('VoterService', ()=>{
    let voterService: VoterService,
     mockHttp
    beforeEach(()=>{
        mockHttp = jasmine.createSpyObj('mockHttp', ['delete','post'])
        voterService = new VoterService(mockHttp)
    })
  
    describe('deleteVoter', ()=>{
        it('should remove the voter from the list of voters', ()=>{
            const session = {id:6, voters:['joe', 'john']}
            mockHttp.delete.and.returnValue(of(false))

            voterService.deleteVoter(3, <ISession>session, 'joe')

            expect(session.voters.length).toBe(1)
            expect(session.voters[0]).toBe('joe')
        })

        it('should call http.delete with the right URL', ()=>{
            const session = {id:6, voters:['joe', 'john']}
            mockHttp.delete.and.returnValue(of(false))

            voterService.deleteVoter(3, <ISession>session, 'joe')

            expect(mockHttp.delete).toHaveBeenCalledOnceWith('/api/events/3/sessions/6/voters/joe')
        })
    })

    describe('addVoter', ()=>{
        it('should call http.post with the right URL', ()=>{
            const session = {id:6, voters:['joe']}
            mockHttp.post.and.returnValue(of(false))

            voterService.addVoter(3, <ISession>session, 'joe')

            expect(mockHttp.post).toHaveBeenCalledOnceWith('/api/events/3/sessions/6/voters/joe',{}, jasmine.any(Object))
        }) 
    })
})