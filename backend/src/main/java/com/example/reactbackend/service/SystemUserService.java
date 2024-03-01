package com.example.reactbackend.service;



import com.example.reactbackend.entity.SystemUser;
import com.example.reactbackend.pojo.NewPasswordPojo;
import com.example.reactbackend.pojo.SystemUserPojo;

import java.util.List;
import java.util.Map;
import java.util.Optional;

public interface SystemUserService {

    String save(SystemUserPojo systemUserPojo);

    List<SystemUser> getAll();

    Optional<SystemUser> getByEmail(String email);

    void deleteById(Long id);

    Optional<SystemUser> getById(Long id);

    String update(Long id, SystemUserPojo systemUserPojo);

    List<Map<String, Object>> getAllStudentsWithoutPassword();

    String setNewPassword(NewPasswordPojo newPasswordPojo);

}
