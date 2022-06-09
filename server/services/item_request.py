from repositories.item_request import ItemRequestRepository
from models.item_request import ItemRequest
from models.item_request import AtualizarItem

class ItemRequestService:

    @staticmethod
    def insert_item_request(item_request: ItemRequest) -> dict:
        try:
            item_request_repo = ItemRequestRepository()
            item_requests = item_request_repo.insert_item_request(item_request)
        finally:
            del item_request_repo
        return item_requests
    
    def update_item_request(id: str, update_item_request: AtualizarItem) -> dict:
        try:
            item_request_repo = ItemRequestRepository()
            item_requests = item_request_repo.update_item_request(id, update_item_request)
        finally:
            del item_request_repo
        return item_requests

    @staticmethod
    def get_all_item_requests() -> dict:
        try:
            item_request_repo = ItemRequestRepository()
            item_requests = item_request_repo.get_all_item_request()
        finally:
            del item_request_repo
        return item_requests

    @staticmethod
    def get_item_request(id: str) -> dict:
        try:
            item_requests_repo = ItemRequestRepository()
            item_requests = item_requests_repo.get_item_request(id)
        finally:
            del item_requests_repo
        return item_requests

    @staticmethod
    def delete_item_request(id: str):
        try:
            item_requests_repo = ItemRequestRepository()
            item_requests = item_requests_repo.delete_item_request(id)
        finally:
            del item_requests_repo
        return item_requests
