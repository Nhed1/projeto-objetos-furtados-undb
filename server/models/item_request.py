import re
from pydantic import BaseModel

class ItemRequest(BaseModel):
    cpf: str
    nome: str
    id_item: int
    nome_item: str
    localizacao: str
    status: str

class AtualizarItem(BaseModel):
    localizacao: str
    status: str