from repositories.cpf_request import CpfRequestRepository
from models.cpf_request import CpfRequest

class CpfRequestService:

    @staticmethod
    def insert_cpf_request(cpf_request: CpfRequest) -> dict:
        try:
            cpf_request_repo = CpfRequestRepository()
            cpf_requests = cpf_request_repo.insert_cpf_request(cpf_request)
        finally:
            del cpf_request_repo
        return cpf_requests
    
    @staticmethod
    def update_item_request(id: str) -> dict:
        try:
            item_request_repo = CpfRequestRepository()
            item_requests = item_request_repo.update_item_request(id)
        finally:
            del item_request_repo
        return item_requests

    @staticmethod
    def get_all_cpf_requests() -> dict:
        try:
            cpf_request_repo = CpfRequestRepository()
            cpf_requests = cpf_request_repo.get_all_cpf_request()
        finally:
            del cpf_request_repo
        return cpf_requests

    @staticmethod
    def get_cpf_request(id: str) -> dict:
        try:
            cpf_requests_repo = CpfRequestRepository()
            cpf_requests = cpf_requests_repo.get_cpf_request(id)
        finally:
            del cpf_requests_repo
        return cpf_requests

    @staticmethod
    def delete_cpf_request(id: str):
        try:
            cpf_requests_repo = CpfRequestRepository()
            cpf_requests = cpf_requests_repo.delete_cpf_request(id)
        finally:
            del cpf_requests_repo
        return cpf_requests
