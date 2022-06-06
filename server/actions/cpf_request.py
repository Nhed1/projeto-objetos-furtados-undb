import json
from starlette.requests import Request
from starlette.responses import JSONResponse
from models.cpf_request import CpfRequest
from services.cpf_request import CpfRequestService

class CpfRequestAction:
    @staticmethod
    async def insert_cpf_request(request: Request) -> JSONResponse:
        try:
            body_payload = await request.json()

            new_id = CpfRequestService.insert_cpf_request(CpfRequest(**body_payload))

            return JSONResponse({"cpf_request_id": new_id})
        except Exception as E:
            return JSONResponse(
                {"Error": E},
                status_code=400
            )

    @staticmethod
    async def update_item_request(request: Request) -> JSONResponse:
        try:
            id = request.path_params['id']
            item_update = CpfRequestService.update_item_request(id)
            return JSONResponse({"Item_update": item_update})
        except Exception as E:
            return JSONResponse(
                {"Error": E},
                status_code=400
            )    

    @staticmethod
    async def get_all_cpf_requests(request: Request) -> JSONResponse:
        try:
            cpf_request = CpfRequestService.get_all_cpf_requests()
            return JSONResponse({"Itens Recuperados": cpf_request})
        except Exception as E:
            return JSONResponse(
                {"Error": E},
                status_code=400
            )       

    @staticmethod
    async def get_cpf_request(request: Request) -> JSONResponse:
        try:
            id = request.path_params['id']
            cpf_request = CpfRequestService.get_cpf_request(id)
            return JSONResponse({"cpf_request": cpf_request})
        except Exception as E:
            return JSONResponse(
                {"Error": E},
                status_code=400
            )    

    @staticmethod
    async def delete_cpf_request(request: Request) -> JSONResponse:
        try:
            id = request.path_params['id']
            deleted = CpfRequestService.delete_cpf_request(id)
            return JSONResponse({"Item":"Excluído do Banco" if deleted else "Item inválido"})
        except Exception as E:
            return JSONResponse(
                {"Error": E},
                status_code=400
            )