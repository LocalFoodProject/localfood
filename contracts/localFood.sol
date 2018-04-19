pragma solidity ^0.4.17;

contract CampaignFactory {
    address[] public deployedCampaigns;
    
    function createCampaign( uint minimum, uint goal) public {
        address newCampaign = new Campaign(minimum, msg.sender, goal);
        deployedCampaigns.push(newCampaign);
    }
    function getDeployedCampaigns()public view returns (address[]) { 
        return deployedCampaigns;
    }
}

contract Campaign {
   
   // @notice : keep track of version 
    function getVersion() public pure returns (string) {
        return "version 0.0.1";
    }

     address public farmer;
    uint minimumContribution;
    mapping (address => bool) public subscribed;
    uint public subscriberCount;
    uint public goal;
   
   modifier restricted(){
       require(msg.sender == farmer);
       _;
       
   }
    
    function Campaign (uint _minimum, address _creator, uint _goal) public {
        farmer = _creator;
        minimumContribution = _minimum;
        goal = _goal;
    }
    
    function contribute () public payable {
        require (msg.value > minimumContribution);
        subscribed[msg.sender] = true;
        subscriberCount++;
        
    }
    function withdraw () public restricted {
        require (address(this).balance>goal);
        farmer.transfer(address(this).balance);
     }
    
   
}

// @notice for future reference, if we want to add request for withdrawal feature for greater transaprency 

// contract Campaign {
   
//    // @notice : keep track of version 
//     function getVersion() public pure returns (string) {
//         return "version 0.0.1";
//     }

    
//     struct Request {
//         string description;
//         uint value;
//         address recipient ;
//         bool complete;
//         uint subscriberCount;
//         mapping (address=> bool)subscribed;
//     }
    
//      mapping (uint => Request) public requests;
//     uint[] public requestsList;
    
   
//     address public farmer;
//     uint minimumContribution;
//    mapping (address => bool) public subscribers;
//    uint public subscribersCount;
   
//    modifier restricted(){
//        require(msg.sender == farmer);
//        _;
       
//    }
    
//     function Campaign (uint minimum, address creator) public {
//         farmer = creator;
//         minimumContribution = minimum;
//     }
    
//     function contribute (uint _id) public payable {
//         require (msg.value > minimumContribution);
//         requests[_id].subscribed[msg.sender] = true;
//        requests[_id].subscriberCount++;
        
//     }
    
   
//      function  createRequest(string description, uint value, address recipient) public {
//         uint id = block.timestamp;
//         Request memory newRequest = Request({
//             description: description,
//             value : value,
//             recipient: recipient,
//             complete: false,
//             subscriberCount: 0
//         });
//         requests[id] = newRequest;
//         requestsList.push(id);
//     }
    
//     function approveRequest( uint index ) public {
//         Request storage request = requests[index];
//         require (request.subscribed[msg.sender]);
//         require(!request.subscribers[msg.sender]);
//         request.subscribed[msg.sender] = true;
//         request.subscriberCount ++;
        
//         }
        
//         function finalizeRequest (uint _id) public  restricted {
//             Request storage request = requests[_id];
//             require(!request.complete);
//             require(requests[_id].subscriberCount > (requests[_id].subscriberCount/2));
//             request.recipient.transfer(request.value);
//             request.complete = true;
            
//         }
//         // @notice this pulls a particular request  
//         function getRequests(uint _id) public view returns(uint, uint, uint, address) {
//             return (
//                 requests[_id].minimumContribution,
//                 requests[_id].this.balance,
//                 requests[_id].subscriberCount,
//                 requests[_id].manager
//             );
//             }
//                 // @notice this pulls requests count
            
//          function getRequestsList() public view returns (uint[]) {
//         return requestsList;
//     }

   
// }