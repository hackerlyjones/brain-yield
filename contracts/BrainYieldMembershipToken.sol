// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./@rarible/royalties/contracts/impl/RoyaltiesV2Impl.sol";
import "./@rarible/royalties/contracts/LibPart.sol";
import "./@rarible/royalties/contracts/LibRoyaltiesV2.sol";

contract BrainYieldMembershipToken is ERC721, Ownable, RoyaltiesV2Impl {
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIDTracker;
  bytes4 private constant _INTERFACE_ID_ERC2981 = 0x2a55205a;

  constructor() ERC721("BrainYieldMembership", "BYM") {
  }

  function mint(address _to) public onlyOwner {
    super._mint(_to, _tokenIDTracker.current());
    _tokenIDTracker.increment();
  }

  function setRoyalties(uint _tokenID, address payable _royaltiesRecipientAddress, uint96 _percentageBasisPoints) public onlyOwner {
    LibPart.Part[] memory _royalties = new LibPart.Part[](1);
    _royalties[0].value = _percentageBasisPoints;
    _royalties[0].account = _royaltiesRecipientAddress;
    _saveRoyalties(_tokenID, _royalties);
  }

  function royaltyInfo(uint256 _tokenID, uint256 _salePrice) external view returns (address receiver, uint256 royaltyAmount) {
    LibPart.Part[] memory _royalties = royalties[_tokenID];
    if (_royalties.length > 0) {
      return (_royalties[0].account, (_salePrice * _royalties[0].value) / 10000);
    }

    return (address(0), 0);
  }

  function supportsInterface(bytes4 interfaceID) public view virtual override(ERC721) returns (bool) {
    if (interfaceID == LibRoyaltiesV2._INTERFACE_ID_ROYALTIES) {
      return true;
    }

    if (interfaceID == _INTERFACE_ID_ERC2981) {
      return true;
    }

    return super.supportsInterface(interfaceID);
  }

  function _baseURI() internal view virtual override returns (string memory) {
    return "http://0.0.0.0/update/nft/metadata/addy/";
  }
}
