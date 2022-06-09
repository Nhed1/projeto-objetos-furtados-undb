import re
from pydantic import BaseModel

class CpfRequest(BaseModel):
    cpf: str
    id_item: int
    localizacao: str
    nome: str
    nome_item: str
    status: str