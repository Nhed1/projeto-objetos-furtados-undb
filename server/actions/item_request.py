import json
from starlette.requests import Request
from starlette.responses import JSONResponse
from models.item_request import ItemRequest
from models.item_request import AtualizarItem
from services.item_request import ItemRequestService

class ItemRequestAction:
    @staticmethod
    async def insert_item_request(request: Request) -> JSONResponse:
        try:
            body_payload = await request.json()

            new_id = ItemRequestService.insert_item_request(ItemRequest(**body_payload))

            return JSONResponse({"item_request_id": new_id})
        except Exception as E:
            return JSONResponse(
                {"Error": E},
                status_code=400
            )

    @staticmethod
    async def update_item_request(request: Request) -> JSONResponse:
        try:
            id = request.path_params['id']
            body_payload = await request.json()
            item_update = ItemRequestService.update_item_request(id,AtualizarItem(**body_payload))
            return JSONResponse({"Item_update": item_update})
        except Exception as E:
            return JSONResponse(
                {"Error": E},
                status_code=400
            )

    @staticmethod
    async def get_all_item_requests(request: Request) -> JSONResponse:
        try:
            item_request = ItemRequestService.get_all_item_requests()
            return JSONResponse({"Itens Recuperados": item_request})
        except Exception as E:
            return JSONResponse(
                {"Error": E},
                status_code=400
            )       

    @staticmethod
    async def get_item_request(request: Request) -> JSONResponse:
        try:
            id = request.path_params['id']
            item_request = ItemRequestService.get_item_request(id)
            return JSONResponse({"Item Request": item_request})
        except Exception as E:
            return JSONResponse(
                {"Error": E},
                status_code=400
            )

    @staticmethod
    async def delete_item_request(request: Request) -> JSONResponse:
        try:
            id = request.path_params['id']
            deleted = ItemRequestService.delete_item_request(id)
            return JSONResponse({"Item":"Excluído do Banco" if deleted else "Item inválido"})
        except Exception as E:
            return JSONResponse(
                {"Error": E},
                status_code=400
            )